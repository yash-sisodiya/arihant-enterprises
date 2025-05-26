interface CalculatorInput {
  fans: number;
  lights: number;
  tv: number;
  refrigerator: number;
  router: number;
  other: number;
}

interface CalculatorResult {
  totalPower: number;
  requiredVA: number;
  batteryAh: number;
  backupHours: number;
}

export const calculateBackup = (
  formData: CalculatorInput,
  batteryAh: number = 150
): CalculatorResult => {
  // Power consumption estimates (in Watts)
  const powerConsumption = {
    fans: 75,
    lights: 15,
    tv: 120,
    refrigerator: 150,
    router: 20,
    other: 100,
  };

  const totalPower =
    formData.fans * powerConsumption.fans +
    formData.lights * powerConsumption.lights +
    formData.tv * powerConsumption.tv +
    formData.refrigerator * powerConsumption.refrigerator +
    formData.router * powerConsumption.router +
    formData.other * powerConsumption.other;

  // Add 20% buffer for inverter efficiency
  const requiredVA = Math.ceil((totalPower * 1.2) / 100) * 100;
  
  // Calculate actual backup hours (with 20% reduction for real-world conditions)
  // Formula: (Battery Capacity * Battery Voltage * Efficiency) / Total Power
  const backupHours = Math.round((batteryAh * 12 * 0.8) / totalPower * 10) / 10;

  return {
    totalPower,
    requiredVA,
    batteryAh,
    backupHours
  };
};