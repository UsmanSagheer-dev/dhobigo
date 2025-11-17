'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormData {
  // Personal Info
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;

  // Documents
  cnicFront: File | null;
  cnicBack: File | null;
  drivingLicense: File | null;

  // Bike Details
  bikeModel: string;
  bikeNumber: string;
  bikePhotos: File[];

  // Coverage & Experience
  coverageAreas: string[];
  experience: string;
}

export default function RiderApplication() {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    cnicFront: null,
    cnicBack: null,
    drivingLicense: null,
    bikeModel: '',
    bikeNumber: '',
    bikePhotos: [],
    coverageAreas: [],
    experience: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const areaOptions: string[] = [
    'Gulshan',
    'DHA',
    'Clifton',
    'Saddar',
    'Korangi',
    'Malir',
    'North Nazimabad',
    'Bahria Town',
  ];

  const handleAreaToggle = (area: string): void => {
    setFormData((prev) => ({
      ...prev,
      coverageAreas: prev.coverageAreas.includes(area)
        ? prev.coverageAreas.filter((a) => a !== area)
        : [...prev.coverageAreas, area],
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'cnicFront' | 'cnicBack' | 'drivingLicense' | 'bikePhotos'
  ): void => {
    const files = e.target.files;
    if (!files) return;

    if (field === 'bikePhotos') {
      setFormData((prev) => ({ ...prev, bikePhotos: Array.from(files) }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();

      // Append all text fields except files and arrays
      (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
        if (
          !['bikePhotos', 'cnicFront', 'cnicBack', 'drivingLicense', 'coverageAreas'].includes(key)
        ) {
          formDataToSend.append(key, formData[key] as string);
        }
      });

      formDataToSend.append('coverageAreas', JSON.stringify(formData.coverageAreas));
      formDataToSend.append('role', 'rider');

      // Append files
      if (formData.cnicFront) formDataToSend.append('cnicFront', formData.cnicFront);
      if (formData.cnicBack) formDataToSend.append('cnicBack', formData.cnicBack);
      if (formData.drivingLicense) formDataToSend.append('drivingLicense', formData.drivingLicense);
      formData.bikePhotos.forEach((photo, index) => {
        formDataToSend.append(`bikePhoto${index}`, photo);
      });

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/auth/application-submitted?role=rider');
      } else {
        setError(data.message || 'Application submission failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = (): void => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = (): void => {
    if (step > 1) setStep(step - 1);
  };

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
              className={`h-2 flex-1 mx-1 rounded ${s <= step ? 'bg-orange-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Personal Information</h3>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="03001234567"
                  pattern="03[0-9]{9}"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <p className="text-xs text-gray-500 mt-1">Format: 03001234567</p>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Password</label>
                <input
                  type="password"
                  required
                  minLength={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                <input
                  type="password"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* Step 2: Documents & Bike Details */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Documents & Bike Details</h3>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">CNIC Front</label>
                <input
                  type="file"
                  accept="image/*"
                  required={!formData.cnicFront}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  onChange={(e) => handleFileChange(e, 'cnicFront')}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">CNIC Back</label>
                <input
                  type="file"
                  accept="image/*"
                  required={!formData.cnicBack}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  onChange={(e) => handleFileChange(e, 'cnicBack')}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Driving License</label>
                <input
                  type="file"
                  accept="image/*"
                  required={!formData.drivingLicense}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  onChange={(e) => handleFileChange(e, 'drivingLicense')}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Bike Model</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Honda CD 70, Yamaha YBR"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={formData.bikeModel}
                  onChange={(e) => setFormData({ ...formData, bikeModel: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Bike Number Plate</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., KHI-123, ABC-456"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 uppercase"
                  value={formData.bikeNumber}
                  onChange={(e) => setFormData({ ...formData, bikeNumber: e.target.value.toUpperCase() })}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Bike Photos (2–3 images)
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  required={formData.bikePhotos.length < 2}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  onChange={(e) => handleFileChange(e, 'bikePhotos')}
                />
                {formData.bikePhotos.length > 0 && (
                  <p className="text-sm text-gray-600 mt-2">
                    {formData.bikePhotos.length} photo(s) selected
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Coverage Areas & Experience */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Coverage Areas & Experience</h3>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3">
                  Select Areas You Can Cover
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {areaOptions.map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => handleAreaToggle(area)}
                      className={`px-4 py-3 rounded-lg font-medium transition-all ${
                        formData.coverageAreas.includes(area)
                          ? 'bg-orange-600 text-white shadow-md'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
                {formData.coverageAreas.length > 0 && (
                  <p className="text-sm text-green-600 mt-3 font-medium">
                    Selected: {formData.coverageAreas.join(', ')}
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
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
              >
                Previous
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading || formData.coverageAreas.length === 0}
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition ml-auto"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            )}
          </div>
        </form>

        <p className="text-center text-gray-600 mt-8">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-orange-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}