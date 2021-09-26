import Head from 'next/head'
import Link from 'next/link'
import BaseLayout from '../components/base'
import utilStyles from '../css/utils.module.css'
import configData from '../config.json'


export default function Home() {
  const name = "Xavier"
  return (
    <BaseLayout home>
      <h1 className={utilStyles.heading2Xl}>{configData.METADATA.WEBSITE_NAME}</h1>
      <p>{configData.METADATA.WEBSITE_DESCRIPTION}</p>
      <p>TYLER GETS ME a job as a waiter, after that Tyler's pushing a gun in my mouth and saying, the
first step to eternal life is you have to die. For a long time though,Tyler and I were best friends.
People are always asking, did I know about Tyler Durden.

The barrel of the gun pressed against the back of my throat,Tyler says "We really won't die."

With my tongue I can feel the silencer holes we drilled into the barrel of the gun. Most of the
noise a gunshot makes is expanding gases, and there's the tiny sonic boom a bullet makes
because it travels so fast. To make a silencer, you just drill holes in the barrel of the gun, a lot
of holes. This lets the gas escape and slows the bullet to below the speed of sound.</p>

    </BaseLayout>
  )
}
