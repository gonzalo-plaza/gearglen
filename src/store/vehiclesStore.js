import { create } from "zustand";

export const useVehiclesStore = create((set, get) => ({
    vehicles: [],
    addVehicle(vehicleObject) {
        const { vehicles } = get()
        const newVehicles = structuredClone(vehicles)
        newVehicles.push(vehicleObject)
        set({ vehicles: newVehicles })
    }
}));