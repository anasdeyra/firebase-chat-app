import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useStore = create(
  combine(
    {
      // UI
      asideIsOpen: false,
      // chat
      chatRoomId: null,
    },
    (set) => ({
      //UI
      openAside: () => set({ asideIsOpen: true }),
      closeAside: () => set({ asideIsOpen: false }),

      // chat
      // @ts-ignore
      joinChatRoom: (id: string) => set({ chatRoomId: id }),
      leaveChat: () => set({ chatRoomId: null }),
    })
  )
);
