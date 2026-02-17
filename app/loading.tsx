// app/loading.tsx
// Ce fichier est automatiquement utilisé par Next.js pour afficher un loading
// pendant que les pages/composants chargent
import Loading from "@/components/ui/Loading";

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Loading />
    </div>
  );
}
