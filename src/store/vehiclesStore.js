import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useVehiclesStore = create(
    persist(
        (set, get) => ({
            vehicles: [],
            addVehicle(vehicleObject) {
                const { vehicles } = get()
                const newVehicles = structuredClone(vehicles)
                newVehicles.push(vehicleObject)
                set({ vehicles: newVehicles })
            },
            removeVehicle(vehicleId) {
                const { vehicles } = get()
                const actualVehicles = structuredClone(vehicles)
                const vehiclesCleaned = actualVehicles.filter((vehicle) => {
                    return vehicle.id !== vehicleId;
                })

                set({ vehicles: vehiclesCleaned });
            }
        }),
        {
            name: 'vehicles',
        }
    )
);