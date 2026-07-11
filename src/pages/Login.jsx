function Login() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        margin: 0,
        background: "linear-gradient(135deg, #1f374b, #00c6fb)",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "center",
          width: "380px",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>🌤 Welcome</h1>

        <p style={{ color: "gray", marginBottom: "25px" }}>
          Login to access the Weather Forecast System
        </p>

        <button
          onClick={handleGoogleLogin}
          style={{
            padding: "12px",
            width: "100%",
            border: "none",
            borderRadius: "8px",
            background: "#4285F4",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;