'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  country: string;
  projectType: string;
  newsletter: boolean;
}

export const BiomeAccessForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log('Form data:', data);
    
    // Create mailto link with form data
    const subject = encodeURIComponent('BIOME Interior Systems - Access Request');
    const body = encodeURIComponent(`
New BIOME Access Request:

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Role: ${data.role}
Country: ${data.country}
Project Type: ${data.projectType}
Newsletter: ${data.newsletter ? 'Yes' : 'No'}

---
Sent from BIOME Landing Page
    `);
    
    // Open mailto (this will open user's email client)
    window.location.href = `mailto:jarl@stykka.com?subject=${subject}&body=${body}`;
    
    // Show success state
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden" id="access">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#b5d4ba] rounded-full blur-3xl opacity-10 transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8b7355] rounded-full blur-3xl opacity-10 transform -translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-[#b5d4ba]/30"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#8b7355] to-[#b5d4ba] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Request sent!</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Your email client should open with a pre-filled message. Send it to complete your access request. 
              We&apos;ll respond within 24 hours with login credentials and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary"
                onClick={() => window.open('https://v2-lemon-chi.vercel.app/library', '_blank')}
              >
                Browse Library
              </Button>
              <Button variant="secondary" onClick={() => setSubmitted(false)}>
                Submit Another Request
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden" id="access">
      {/* Organic blob shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#b5d4ba] rounded-full blur-3xl opacity-10 transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8b7355] rounded-full blur-3xl opacity-10 transform -translate-x-1/3 translate-y-1/3" />
      </div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Start using BIOME <span className="text-[#b5d4ba]">interior blocks today</span>
            </h2>
            <p className="text-lg text-white/80">
              Get instant access to space-efficient, modular interiors. Download BIM-ready 3D models, 
              deploy proven configurations, and maximize your project's m³-to-m² value.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl space-y-6 border border-[#b5d4ba]/20"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-900">
                Your name *
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b7355] focus:border-transparent text-gray-900 bg-white"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900">
                Email *
              </label>
              <input
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b7355] focus:border-transparent text-gray-900 bg-white"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold mb-2 text-gray-900">
                Company / Organization *
              </label>
              <input
                id="company"
                type="text"
                {...register('company', { required: 'Company is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b7355] focus:border-transparent text-gray-900 bg-white"
              />
              {errors.company && (
                <p className="text-red-600 text-sm mt-1">{errors.company.message}</p>
              )}
            </div>

            {/* Role and Country */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="role" className="block text-sm font-semibold mb-2 text-gray-900">
                  Role *
                </label>
                <select
                  id="role"
                  {...register('role', { required: 'Please select a role' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b7355] focus:border-transparent text-gray-900 bg-white"
                >
                  <option value="">Select your role</option>
                  <option value="architect">Architect</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Interior Designer</option>
                  <option value="engineer">Engineer</option>
                  <option value="other">Other</option>
                </select>
                {errors.role && (
                  <p className="text-red-600 text-sm mt-1">{errors.role.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-semibold mb-2 text-gray-900">
                  Country *
                </label>
                <input
                  id="country"
                  type="text"
                  {...register('country', { required: 'Country is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b7355] focus:border-transparent text-gray-900 bg-white"
                />
                {errors.country && (
                  <p className="text-red-600 text-sm mt-1">{errors.country.message}</p>
                )}
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-semibold mb-2 text-gray-900">
                Project type *
              </label>
              <select
                id="projectType"
                {...register('projectType', { required: 'Please select a project type' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b7355] focus:border-transparent text-gray-900 bg-white"
              >
                <option value="">Select project type</option>
                <option value="residential">Residential</option>
                <option value="mixed-use">Mixed-use</option>
                <option value="student-housing">Student Housing</option>
                <option value="senior-living">Senior Living</option>
                <option value="compact-living">Compact Living</option>
                <option value="other">Other</option>
              </select>
              {errors.projectType && (
                <p className="text-red-600 text-sm mt-1">{errors.projectType.message}</p>
              )}
            </div>

            {/* Newsletter checkbox */}
            <div className="flex items-start gap-3 pt-4">
              <input
                id="newsletter"
                type="checkbox"
                {...register('newsletter')}
                className="mt-1 w-5 h-5 border-gray-300 rounded focus:ring-2 focus:ring-[#8b7355] text-[#8b7355]"
              />
              <label htmlFor="newsletter" className="text-sm text-gray-700">
                Send me updates about new components, features, and BIOME projects
              </label>
            </div>

            {/* Submit button */}
            <div className="pt-4">
              <Button type="submit" variant="primary" className="w-full">
                Request Access →
              </Button>
            </div>

            <p className="text-center text-sm text-gray-500 pt-2">
              By submitting, you agree to receive access credentials and occasional updates from BIOME.
            </p>
          </motion.form>

          {/* Secondary info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-white/60 text-sm">
              Questions? Email us at{' '}
              <a href="mailto:jarl@stykka.com" className="text-[#b5d4ba] hover:underline">
                jarl@stykka.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

