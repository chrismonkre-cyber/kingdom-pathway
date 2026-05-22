import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-8 text-center">
          <div>
            <img src="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/55003ad81_logopng.png" alt="KMM" className="w-20 h-20 mx-auto mb-4 rounded-full" />
            <h2 className="font-heading text-2xl text-primary mb-2">Something went wrong</h2>
            <p className="text-muted-foreground mb-4">Please refresh the page to continue your journey.</p>
            <button onClick={() => window.location.reload()} className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-heading">Refresh</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}