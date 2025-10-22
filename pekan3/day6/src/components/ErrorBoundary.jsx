import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
          <div className="max-w-md w-full bg-white shadow-xl rounded-3xl px-8 py-10 text-center">
            <h1 className="text-2xl font-semibold text-slate-900">
              Terjadi Kesalahan
            </h1>
            <p className="mt-3 text-sm text-slate-600">
              Mohon maaf, ada sesuatu yang tidak berjalan semestinya. Silakan
              coba muat ulang halaman atau kembali ke beranda.
            </p>
            <button
              onClick={this.handleReset}
              className="mt-8 inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-1"
            >
              Muat Ulang Halaman
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
