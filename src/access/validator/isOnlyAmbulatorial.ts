export const isOnlyAmbulatorial = (value?: string): boolean => {
  if (!value) return false;
  if (value === 'AACA' || value === 'AMCA' || value === 'AMCR') {
    return true;
  }

  return false;
};

export const isOnlyAmbulatorialAltaComplexidade = (value?: string): boolean => isOnlyAmbulatorial(value) && value !== 'AACA';
