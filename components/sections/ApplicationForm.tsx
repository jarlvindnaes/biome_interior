'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface FormData {
  company: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  country: string;
  projectName: string;
  projectTimeline: string;
  improvement: string;
  decisionDate: string;
  consent: boolean;
}

export const ApplicationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    // TODO: Replace with actual submission logic
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-[var(--color-primary)] to-gray-800 text-white relative overflow-hidden" id="apply">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full blur-3xl opacity-10 transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-earth)] rounded-full blur-3xl opacity-10 transform -translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-white/95 backdrop-blur-sm rounded-lg p-12 shadow-2xl border border-[var(--color-accent)]/30"
          >
            <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">Application received!</h2>
            <p className="text-gray-600 mb-8">
              Thanks—review in progress. We&apos;ll reach out for a 20-min scoping call and send the case template.
            </p>
            <Button variant="secondary" onClick={() => setSubmitted(false)}>
              Submit another application
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-[var(--color-primary)] to-gray-800 text-white relative overflow-hidden" id="apply">
      {/* Organic blob shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full blur-3xl opacity-10 transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-earth)] rounded-full blur-3xl opacity-10 transform -translate-x-1/3 translate-y-1/3" />
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
              Apply to join the Circular Alliance
            </h2>
            <p className="text-lg text-white/80">
              We review applications weekly and reply with next steps.
            </p>
          </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/95 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-2xl space-y-6 border border-[var(--color-accent)]/30"
        >
          {/* Company / Org */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company / Organization *
            </label>
            <input
              id="company"
              type="text"
              {...register('company', { required: 'Company is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
            />
            {errors.company && (
              <p className="text-red-600 text-sm mt-1">{errors.company.message}</p>
            )}
          </div>

          {/* Name and Role */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your name *
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium mb-2">
                Role *
              </label>
              <input
                id="role"
                type="text"
                {...register('role', { required: 'Role is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              />
              {errors.role && (
                <p className="text-red-600 text-sm mt-1">{errors.role.message}</p>
              )}
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone *
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone', { required: 'Phone is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium mb-2">
              Country *
            </label>
            <input
              id="country"
              type="text"
              {...register('country', { required: 'Country is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
            />
            {errors.country && (
              <p className="text-red-600 text-sm mt-1">{errors.country.message}</p>
            )}
          </div>

          {/* Project Name and Timeline */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="projectName" className="block text-sm font-medium mb-2">
                Project name *
              </label>
              <input
                id="projectName"
                type="text"
                {...register('projectName', { required: 'Project name is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              />
              {errors.projectName && (
                <p className="text-red-600 text-sm mt-1">{errors.projectName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="projectTimeline" className="block text-sm font-medium mb-2">
                Project timeline *
              </label>
              <input
                id="projectTimeline"
                type="text"
                placeholder="e.g., Q3 2025"
                {...register('projectTimeline', { required: 'Timeline is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              />
              {errors.projectTimeline && (
                <p className="text-red-600 text-sm mt-1">{errors.projectTimeline.message}</p>
              )}
            </div>
          </div>

          {/* What to improve */}
          <div>
            <label htmlFor="improvement" className="block text-sm font-medium mb-2">
              What you want to improve *
            </label>
            <select
              id="improvement"
              {...register('improvement', { required: 'Please select an option' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
            >
              <option value="">Select an option</option>
              <option value="reduce-embodied-co2">Reduce embodied CO₂</option>
              <option value="enable-repair">Enable repair</option>
              <option value="replaceable-fronts">Replaceable fronts</option>
              <option value="reuse-salvage">Reuse & salvage</option>
              <option value="dpp-traceability">DPP & traceability</option>
              <option value="other">Other</option>
            </select>
            {errors.improvement && (
              <p className="text-red-600 text-sm mt-1">{errors.improvement.message}</p>
            )}
          </div>

          {/* Expected decision date */}
          <div>
            <label htmlFor="decisionDate" className="block text-sm font-medium mb-2">
              Expected decision date *
            </label>
            <input
              id="decisionDate"
              type="date"
              {...register('decisionDate', { required: 'Decision date is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
            />
            {errors.decisionDate && (
              <p className="text-red-600 text-sm mt-1">{errors.decisionDate.message}</p>
            )}
          </div>

          {/* Consent checkbox */}
          <div className="flex items-start gap-3">
            <input
              id="consent"
              type="checkbox"
              {...register('consent', { required: 'You must agree to continue' })}
              className="mt-1 w-5 h-5 border-gray-300 rounded focus:ring-2 focus:ring-black"
            />
            <label htmlFor="consent" className="text-sm text-gray-700">
              I agree to share non-sensitive learnings with the network. *
            </label>
          </div>
          {errors.consent && (
            <p className="text-red-600 text-sm">{errors.consent.message}</p>
          )}

          {/* Submit button */}
          <div className="pt-4">
            <Button type="submit" variant="primary" className="w-full">
              Apply now →
            </Button>
          </div>
        </motion.form>

        {/* Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Not ready to apply?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" asLink href="#catalogue">
              Browse the catalogue
            </Button>
            <Button variant="secondary" asLink href="#">
              Get the case template
            </Button>
            <Button variant="secondary" asLink href="#">
              Join the quarterly update
            </Button>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

