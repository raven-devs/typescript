// `ReturnType` extracts the return type of a function type.
type PointGenerator = () => { x: number; y: number };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20,
};

export {};
