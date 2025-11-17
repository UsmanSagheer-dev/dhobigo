'use client';

import { useProviderApplication } from './hook/useProviderApplication';
import { ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import CustomInput from '@/components/CustomInput';

export default function ProviderApplication() {
  const {
    step,
    formData,
    setFormData,
    loading,
    error,
    serviceOptions,
    handleServiceToggle,
    handleFileChange,
    nextStep,
    prevStep,
  } = useProviderApplication();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    // setError('');

    if (formData.password !== formData.confirmPassword) {
      // setError('Passwords do not match');
      return;
    }

    // setLoading(true);

    try {
      const formDataToSend = new FormData();

      // Append text fields
      (Object.keys(formData) as (keyof typeof formData)[]).forEach((key) => {
        if (
          key !== 'shopPhotos' &&
          key !== 'cnicFront' &&
          key !== 'cnicBack' &&
          key !== 'services'
        ) {
          formDataToSend.append(key, formData[key] as string);
        }
      });

      formDataToSend.append('services', JSON.stringify(formData.services));
      formDataToSend.append('role', 'provider');

      // Append files
      if (formData.cnicFront) formDataToSend.append('cnicFront', formData.cnicFront);
      if (formData.cnicBack) formDataToSend.append('cnicBack', formData.cnicBack);
      formData.shopPhotos.forEach((photo, index) => {
        formDataToSend.append(`shopPhoto${index}`, photo);
      });

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/auth/application-submitted?role=provider');
      } else {
        // setError(data.message || 'Application submission failed');
      }
    } catch (err) {
      // setError('Something went wrong. Please try again.');
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-2">
          Provider Application
        </h2>
        <p className="text-center text-gray-600 mb-6">Step {step} of 4</p>

        {/* Progress Bar */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 mx-1 rounded ${s <= step ? 'bg-green-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Personal Information</h3>

              <CustomInput
                label="Full Name"
                inputProps={{
                  type: 'text',
                  required: true,
                  className:
                    'w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500',
                  value: formData.name,
                  onChange: (e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value }),
                }}
              />

              <CustomInput
                label="Email"
                inputProps={{
                  type: 'email',
                  required: true,
                  className:
                    'w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500',
                  value: formData.email,
                  onChange: (e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value }),
                }}
              />

              <CustomInput
                label="Phone Number"
                inputProps={{
                  type: 'tel',
                  required: true,
                  placeholder: '03001234567',
                  className:
                    'w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500',
                  value: formData.phone,
                  onChange: (e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value }),
                }}
              />

              <CustomInput
                label="Password"
                showPasswordToggle={true}
                inputProps={{
                  type: 'password',
                  required: true,
                  className:
                    'w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500',
                  value: formData.password,
                  onChange: (e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, password: e.target.value }),
                }}
              />

              <CustomInput
                label="Confirm Password"
                showPasswordToggle={true}
                inputProps={{
                  type: 'password',
                  required: true,
                  className:
                    'w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500',
                  value: formData.confirmPassword,
                  onChange: (e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, confirmPassword: e.target.value }),
                }}
              />
            </div>
          )}

          {/* Step 2: Shop Details */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Shop Details</h3>

              <CustomInput
                label="Shop Name"
                inputProps={{
                  type: 'text',
                  required: true,
                  className:
                    'w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500',
                  value: formData.shopName,
                  onChange: (e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, shopName: e.target.value }),
                }}
              />

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Shop Address</label>
                <textarea
                  required
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.shopAddress}
                  onChange={(e) => setFormData({ ...formData, shopAddress: e.target.value })}
                />
              </div>

              <CustomInput
                label="Latitude"
                inputProps={{
                  type: 'text',
                  placeholder: '24.8607',
                  className:
                    'w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500',
                  value: formData.latitude,
                  onChange: (e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, latitude: e.target.value }),
                }}
              />

              <CustomInput
                label="Longitude"
                inputProps={{
                  type: 'text',
                  placeholder: '67.0011',
                  className:
                    'w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500',
                  value: formData.longitude,
                  onChange: (e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, longitude: e.target.value }),
                }}
              />

              <CustomInput
                label="Shop Photos (3-5 images)"
                inputProps={{
                  type: 'file',
                  multiple: true,
                  accept: 'image/*',
                  required: formData.shopPhotos.length < 3,
                  className: 'w-full p-3 border border-gray-300 rounded-lg',
                  onChange: (e: ChangeEvent<HTMLInputElement>) => handleFileChange(e, 'shopPhotos'),
                }}
              />
              {formData.shopPhotos.length > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  {formData.shopPhotos.length} photo(s) selected
                </p>
              )}
            </div>
          )}

          {/* Step 3: Documents & Services */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Documents & Services</h3>

              <CustomInput
                label="CNIC Front"
                inputProps={{
                  type: 'file',
                  accept: 'image/*',
                  required: !formData.cnicFront,
                  className: 'w-full p-3 border border-gray-300 rounded-lg',
                  onChange: (e: ChangeEvent<HTMLInputElement>) => handleFileChange(e, 'cnicFront'),
                }}
              />

              <CustomInput
                label="CNIC Back"
                inputProps={{
                  type: 'file',
                  accept: 'image/*',
                  required: !formData.cnicBack,
                  className: 'w-full p-3 border border-gray-300 rounded-lg',
                  onChange: (e: ChangeEvent<HTMLInputElement>) => handleFileChange(e, 'cnicBack'),
                }}
              />

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Services Offered</label>
                <div className="flex flex-wrap gap-3">
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`px-5 py-3 rounded-lg font-semibold transition-all ${
                        formData.services.includes(service)
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <CustomInput
                label="Experience (Years)"
                inputProps={{
                  type: 'text',
                  required: true,
                  placeholder: 'e.g., 5 years',
                  className: 'w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500',
                  value: formData.experience,
                  onChange: (e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, experience: e.target.value }),
                }}
              />
            </div>
          )}

          {/* Step 4: Bank Information */}
          {step === 4 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Bank Information</h3>
              <CustomInput
                label="Bank Name"
                inputProps={{
                  type: 'text',
                  required: true,
                  placeholder: 'e.g., HBL, UBL, MCB',
                  className: 'w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500',
                  value: formData.bankName,
                  onChange: (e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, bankName: e.target.value }),
                }}
              />

              <CustomInput
                label="Account Number"
                inputProps={{
                  type: 'text',
                  required: true,
                  className: 'w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500',
                  value: formData.accountNumber,
                  onChange: (e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, accountNumber: e.target.value }),
                }}
              />

              <CustomInput
                label="Account Title"
                inputProps={{
                  type: 'text',
                  required: true,
                  className: 'w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500',
                  value: formData.accountTitle,
                  onChange: (e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, accountTitle: e.target.value }),
                }}
              />
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

            {step < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 transition ml-auto"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            )}
          </div>
        </form>

        <p className="text-center text-gray-600 mt-8">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-green-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}