"use client";

import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";
import { useRiderApplication } from "./hook/useRiderApplication";

export default function RiderApplication() {
  const {
    step,
    formData,
    loading,
    error,
    areaOptions,
    handleAreaToggle,
    handleFileChange,
    handleSubmit,
    nextStep,
    prevStep,
    setFormData,
  } = useRiderApplication();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-2">
          Rider Application
        </h2>
        <p className="text-center text-gray-600 mb-6">Step {step} of 3</p>

        {/* Progress Bar */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 mx-1 rounded ${
                s <= step ? "bg-orange-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold mb-4">Personal Information</h3>

              <CustomInput
                label="Full Name"
                inputProps={{
                  type: "text",
                  required: true,
                  className:
                    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  value: formData.name,
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, name: e.target.value }),
                }}
              />

              <CustomInput
                label="Email"
                inputProps={{
                  type: "email",
                  required: true,
                  className:
                    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  value: formData.email,
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, email: e.target.value }),
                }}
              />

              <CustomInput
                label="Phone Number"
                inputProps={{
                  type: "tel",
                  required: true,
                  placeholder: "03001234567",
                  pattern: "03[0-9]{9}",
                  className:
                    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  value: formData.phone,
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, phone: e.target.value }),
                }}
              />

              <CustomInput
                label="Password"
                showPasswordToggle={true}
                inputProps={{
                  type: "password",
                  required: true,
                  minLength: 6,
                  className:
                    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  value: formData.password,
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, password: e.target.value }),
                }}
              />

              <CustomInput
                label="Confirm Password"
                showPasswordToggle={true}
                inputProps={{
                  type: "password",
                  required: true,
                  className:
                    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  value: formData.confirmPassword,
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    }),
                }}
              />
            </div>
          )}

          {/* Step 2: Documents & Bike Details */}
          {step === 2 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold mb-4">
                Documents & Bike Details
              </h3>

              <CustomInput
                label="CNIC Front"
                inputProps={{
                  type: "file",
                  accept: "image/*",
                  required: !formData.cnicFront,
                  className: "w-full p-3 border border-gray-300 rounded-lg",
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleFileChange(e, "cnicFront"),
                }}
              />

              <CustomInput
                label="CNIC Back"
                inputProps={{
                  type: "file",
                  accept: "image/*",
                  required: !formData.cnicBack,
                  className: "w-full p-3 border border-gray-300 rounded-lg",
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleFileChange(e, "cnicBack"),
                }}
              />

              <CustomInput
                label="Driving License"
                inputProps={{
                  type: "file",
                  accept: "image/*",
                  required: !formData.drivingLicense,
                  className: "w-full p-3 border border-gray-300 rounded-lg",
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleFileChange(e, "drivingLicense"),
                }}
              />

              <CustomInput
                label="Bike Model"
                inputProps={{
                  type: "text",
                  required: true,
                  placeholder: "e.g., Honda CD 70, Yamaha YBR",
                  className:
                    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  value: formData.bikeModel,
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, bikeModel: e.target.value }),
                }}
              />

              <CustomInput
                label="Bike Number Plate"
                inputProps={{
                  type: "text",
                  required: true,
                  placeholder: "e.g., KHI-123, ABC-456",
                  className:
                    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 uppercase",
                  value: formData.bikeNumber,
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    setFormData({
                      ...formData,
                      bikeNumber: e.target.value.toUpperCase(),
                    }),
                }}
              />

              <CustomInput
                label="Bike Photos (2–3 images)"
                inputProps={{
                  type: "file",
                  multiple: true,
                  accept: "image/*",
                  required: formData.bikePhotos.length < 2,
                  className: "w-full p-3 border border-gray-300 rounded-lg",
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleFileChange(e, "bikePhotos"),
                }}
              />
            </div>
          )}

          {/* Step 3: Coverage Areas & Experience */}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold mb-4">
                Coverage Areas & Experience
              </h3>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3">
                  Select Areas You Can Cover
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {areaOptions.map((area) => (
                    <Button
                      key={area}
                      type="button"
                      onClick={() => handleAreaToggle(area)}
                      className={`px-4 py-3 rounded-lg font-medium transition-all ${
                        formData.coverageAreas.includes(area)
                          ? "bg-orange-600 text-white shadow-md"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {area}
                    </Button>
                  ))}
                </div>
                {formData.coverageAreas.length > 0 && (
                  <p className="text-sm text-green-600 mt-3 font-medium">
                    Selected: {formData.coverageAreas.join(", ")}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Riding Experience
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your experience as a rider, how long you've been riding, any delivery experience, etc."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
            {step > 1 && (
              <Button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
              >
                Previous
              </Button>
            )}

            {step < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition ml-auto"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={loading || formData.coverageAreas.length === 0}
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition ml-auto"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            )}
          </div>
        </form>

        <p className="text-center text-gray-600 mt-8">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-orange-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
