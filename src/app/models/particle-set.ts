import {Particle} from "./particle";
export class ParticleSet {
  particles: Array<Particle> = [];

  constructor(n) {
    for (let i = 0; i < n; i++) {
      this.particles.push(new Particle(i, Math.random(), Math.random(), 0, 0))
    }
  }

  size() {
    return this.particles.length;
  }

  get(i: number) {
    return this.particles[i];
  }

  /**
   * return a new particle set with update positions random
   * factor is a floating point value. The leap among the two directions is on average factor * width or height.
   * a particle cannot get out of the box
   */
  walk(factor) {
    const bs = new ParticleSet(0);

    this.particles.forEach(function (b) {
      let dx = (Math.random() - 0.5) * 4 * factor;
      let dy = (Math.random() - 0.5) * 4 * factor;
      let x1 = ((b.x + dx) <= 1 && b.x + dx >= 0) ? (b.x + dx) : (b.x - dx);
      let y1 = ((b.y + dy) <= 1 && b.y + dy >= 0) ? (b.y + dy) : (b.y - dy);
      bs.particles.push(new Particle(b.id, x1, y1, b.x, b.y));
    });
    return bs;
  }
}
