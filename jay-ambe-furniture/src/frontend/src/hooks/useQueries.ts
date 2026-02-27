import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";
import { ExternalBlob } from "../backend";
import type { GalleryItem, ContactFormSubmission } from "../backend.d";
import { GalleryCategory } from "../backend.d";

export function useAllGalleryItems() {
  const { actor, isFetching } = useActor();
  return useQuery<GalleryItem[]>({
    queryKey: ["gallery", "all"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllGalleryItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGalleryItemsByCategory(category: GalleryCategory) {
  const { actor, isFetching } = useActor();
  return useQuery<GalleryItem[]>({
    queryKey: ["gallery", "category", category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGalleryItemsByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useIsAdmin() {
  const { actor, isFetching } = useActor();
  return useQuery<boolean>({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllContactSubmissions() {
  const { actor, isFetching } = useActor();
  return useQuery<ContactFormSubmission[]>({
    queryKey: ["contactSubmissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContactFormSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddGalleryItem() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      title,
      category,
      bytes,
      onProgress,
    }: {
      title: string;
      category: GalleryCategory;
      bytes: Uint8Array<ArrayBuffer>;
      onProgress?: (pct: number) => void;
    }) => {
      if (!actor) throw new Error("Not connected");
      let blob = ExternalBlob.fromBytes(bytes);
      if (onProgress) blob = blob.withUploadProgress(onProgress);
      return actor.addGalleryItem(title, category, blob);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["gallery"] });
    },
  });
}

export function useDeleteGalleryItem() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.deleteGalleryItem(id);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["gallery"] });
    },
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: ({
      name,
      phoneNumber,
      message,
    }: {
      name: string;
      phoneNumber: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactForm(name, phoneNumber, message);
    },
  });
}

export { GalleryCategory };
export type { GalleryItem, ContactFormSubmission };
