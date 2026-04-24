import { create } from "zustand";

const usePaginationStore = create((set) => ({

    cusCurPage: 1,
    cusRowPerPage: 10,

    setCusCurPage: (page) => set({ cusCurPage: page }),
    setCusRowPerPage: (row) => set({ cusRowPerPage: row }),

  



}));

export default usePaginationStore;