'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaFlask } from 'react-icons/fa';

interface ResearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResearchModal({ isOpen, onClose }: ResearchModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-slate-900/90 backdrop-blur-sm p-6 text-left align-middle shadow-xl transition-all border border-slate-800">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <FaFlask className="w-6 h-6 text-cyan-300/80" />
                  </div>
                  <Dialog.Title as="h3" className="text-2xl font-semibold text-white/90">
                    Research Interests
                  </Dialog.Title>
                </div>

                <div className="mt-4 space-y-6 text-slate-300">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-cyan-300/90">Machine Learning & AI</h4>
                    <p className="text-slate-400">
                      Exploring deep learning architectures, natural language processing, and computer vision applications. Particularly interested in transformer models and their applications in solving real-world problems.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-cyan-300/90">Software Engineering</h4>
                    <p className="text-slate-400">
                      Investigating software architecture patterns, distributed systems, and cloud computing. Focus on building scalable and maintainable systems.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-cyan-300/90">Current Projects and Researches</h4>
                    <ul className="list-disc list-inside text-slate-400 space-y-2">
                      <li>Creating a dataset for Code-Mixed hate speech and evaluating the performance of a fine tuned model</li>
                      <li>Mortality Prediction from ECG imaging by Neural Temporal Point Process</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 hover:bg-cyan-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 transition-all duration-200"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
