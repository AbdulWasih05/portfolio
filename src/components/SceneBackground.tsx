"use client";

export default function SceneBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950">
      {/* Star layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 25px 35px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.2px 1.2px at 150px 120px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 300px 250px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 450px 400px, #fff, rgba(0,0,0,0))
          `,
          backgroundSize: "350px 350px",
        }}
      />
    </div>
  );
}
