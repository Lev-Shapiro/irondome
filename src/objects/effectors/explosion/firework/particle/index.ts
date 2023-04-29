import { ParticleEntity } from './particle.entity'
import { ParticlePolicy } from './particle.policy'

export const particlePolicy = new ParticlePolicy()

export const particleEntity = ParticleEntity.bind(null, particlePolicy)
