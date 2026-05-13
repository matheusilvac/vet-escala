import { ImageResponse } from "next/og";

import { SITE_NAME } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b1d26 0%, #06221f 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-180px",
            background:
              "radial-gradient(circle at 25% 20%, rgba(0,203,167,0.45), transparent 55%), radial-gradient(circle at 80% 90%, rgba(124,255,178,0.35), transparent 55%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at top, rgba(255,255,255,0.10), transparent 60%)",
          }}
        />

        <div
          style={{
            width: "1040px",
            height: "470px",
            borderRadius: "42px",
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              ve
            </div>
            <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 18 }}>
              {SITE_NAME}
            </div>
            <div
              style={{
                marginLeft: "auto",
                color: "rgba(255,255,255,0.70)",
                fontSize: 14,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              Aceleradora Veterinária
            </div>
          </div>

          <div
            style={{
              color: "white",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
            }}
          >
            Sua clínica pode virar a{" "}
            <span style={{ color: "#7cffb2" }}>Referência Nº 1</span> da cidade.
          </div>

          <div
            style={{
              marginTop: "22px",
              color: "rgba(255,255,255,0.78)",
              fontSize: 22,
              lineHeight: 1.35,
              maxWidth: "860px",
            }}
          >
            Método para posicionamento premium, conversão e escala via WhatsApp.
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
            {["100% Vet", "Metodologia Altus", "CFMV + LGPD"].map((t) => (
              <div
                key={t}
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.86)",
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
