"use client";
import React, { useEffect, useState } from "react";
import ProfileInput from "./ProfileInput";
import Button from "@/component/Button";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";
import {
  saveProfile,
  selectProfile,
  clearError,
} from "@/store/slices/profileSlice";
import Image from "next/image";
import IMAGES from "@/public/assets/images";
import { Clock, MapPin, Phone } from "lucide-react";

const documents = [
  { id: "cnic", label: "CNIC / شناختی کارڈ", verified: true },
  { id: "shopPhoto", label: "Shop Photo / دکان کی تصویر", verified: true },
  { id: "utility", label: "Utility Bill / بل", verified: true },
];

export default function ProfileForm() {
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector((state: RootState) => selectProfile(state));

  const [form, setForm] = useState({
    name: profile?.name ?? "",
    phone: profile?.phone ?? "",
    shopAddress: profile?.shopAddress ?? "",
    workingHours: profile?.workingHours ?? "",
  });

  useEffect(() => {
    setForm({
      name: profile?.name ?? "",
      phone: profile?.phone ?? "",
      shopAddress: profile?.shopAddress ?? "",
      workingHours: profile?.workingHours ?? "",
    });
  }, [
    profile?.name,
    profile?.phone,
    profile?.shopAddress,
    profile?.workingHours,
  ]);

  function updateField(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSave() {
    try {
      await dispatch(saveProfile(form)).unwrap();
    } catch (err) {
      console.error("Save failed", err);
    }
  }

  return (
    <div className="space-y-4">
      {/* Profile Card */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
            <Image
              src={IMAGES.usman.src}
              alt="User Avatar"
              width={64}
              height={64}
              className="object-cover w-full h-full object-center"
            />
          </div>

          <div>
            <div className="text-lg font-semibold">{form.name || "-"}</div>
            <div className="text-sm text-gray-500">{form.phone || "-"}</div>
          </div>
        </div>

        <ProfileInput
          label="Name / نام"
          value={form.name}
          onChange={(v) => updateField("name", v)}
          placeholder="Ahmed Ali"
        />
        <ProfileInput
          label="Phone / فون"
          icon={<Phone size={16} />}
          value={form.phone}
          onChange={(v) => updateField("phone", v)}
          placeholder="+92 300 1234567"
        />
        <ProfileInput
          icon={<MapPin size={16} />}
          label="Shop Address / دکان کا پتا"
          value={form.shopAddress}
          onChange={(v) => updateField("shopAddress", v)}
          placeholder="Shop 45, Main Market, Karachi"
        />
        <ProfileInput
          icon={<Clock size={16} />}
          label="Working Hours / کام کے اوقات"
          value={form.workingHours}
          onChange={(v) => updateField("workingHours", v)}
          placeholder="9:00 AM - 9:00 PM"
        />

        <Button
          onClick={handleSave}
          className="w-full mt-4"
          disabled={profile?.status === "loading"}
        >
          {profile?.status === "loading"
            ? "Saving..."
            : "Save Changes / تبدیلیاں محفوظ کریں"}
        </Button>

        {profile?.status === "succeeded" && (
          <div className="mt-3 text-sm text-green-600">
            Profile saved successfully
          </div>
        )}

        {profile?.status === "failed" && (
          <div className="mt-3 text-sm text-red-600">
            {profile?.error}
            <button
              onClick={() => dispatch(clearError())}
              className="ml-3 text-xs underline"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>

      {/* Documents */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm">
        <h3 className="font-medium mb-3">Documents / دستاویزات</h3>

        <div className="space-y-2">
          {documents.map((d) => (
            <div
              key={d.id}
              className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 rounded p-3"
            >
              <span className="text-sm">{d.label}</span>
              <span
                className={`text-sm ${
                  d.verified ? "text-green-600" : "text-orange-500"
                }`}
              >
                {d.verified ? "✓ Verified" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
