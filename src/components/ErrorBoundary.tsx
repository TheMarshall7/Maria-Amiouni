"use client";

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-salon-bg px-6">
          <div className="text-center">
            <h1 className="text-2xl font-serif text-salon-primary mb-4">Something went wrong</h1>
            <p className="text-stone-600 mb-6">Please refresh the page or try again later.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-salon-primary text-white px-6 py-3 rounded-full hover:bg-stone-800 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
