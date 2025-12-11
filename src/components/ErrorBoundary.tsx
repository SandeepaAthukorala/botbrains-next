'use client';

import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('❌ ErrorBoundary caught an error:', error, errorInfo);
        this.setState({
            error,
            errorInfo,
        });
    }

    private handleReload = () => {
        window.location.reload();
    };

    private handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 p-4">
                    <div className="max-w-2xl w-full bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-8 shadow-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                                <AlertTriangle className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white mb-1">Something went wrong</h1>
                                <p className="text-secondary">The application encountered an unexpected error</p>
                            </div>
                        </div>

                        <div className="bg-dark-900/50 rounded-xl p-4 mb-6 border border-dark-700">
                            <p className="text-sm font-mono text-red-400 mb-2">
                                {this.state.error?.toString()}
                            </p>
                            {this.state.errorInfo && (
                                <details className="mt-4">
                                    <summary className="text-sm font-semibold text-secondary cursor-pointer hover:text-primary transition-colors">
                                        Technical Details
                                    </summary>
                                    <pre className="mt-2 text-xs text-secondary overflow-auto max-h-64 p-2 bg-dark-800/50 rounded">
                                        {this.state.errorInfo.componentStack}
                                    </pre>
                                </details>
                            )}
                        </div>

                        <div className="flex gap-3">
                            <Button
                                onClick={this.handleReload}
                                className="flex-1"
                            >
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Reload Page
                            </Button>
                            <Button
                                onClick={this.handleReset}
                                variant="ghost"
                                className="flex-1"
                            >
                                Try Again
                            </Button>
                        </div>

                        <div className="mt-6 p-4 bg-dark-900/30 border border-dark-700/50 rounded-lg">
                            <p className="text-sm text-secondary">
                                <strong className="text-white">Tips:</strong>
                            </p>
                            <ul className="mt-2 space-y-1 text-sm text-secondary ml-4 list-disc">
                                <li>Try refreshing the page</li>
                                <li>Check your internet connection</li>
                                <li>Clear browser cache and reload</li>
                                <li>Check console for more details (F12)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
