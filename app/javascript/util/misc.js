import { blocksConfig } from './blocksConfig';

export function getTypeByIndex(index) {
  return blocksConfig[index].type;
}

export function getRandomType() {
  let type = 0;
  const frequencyToTypeIndex = [];
  const total = blocksConfig.reduce(
    (total, blockConfig) => {
      total += blockConfig.frequency;
      frequencyToTypeIndex.push(total);
      return total;
    },
    0
  );
  const randomValue = Math.floor(Math.random() * total);
  frequencyToTypeIndex.some((frequency, i) => {
    type = i;
    return randomValue < frequency;
  });
  return type;
}
