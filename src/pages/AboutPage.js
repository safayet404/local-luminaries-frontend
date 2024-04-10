import React,{Profiler} from 'react'
import CommonBanner from '../components/CommonBanner'
import AboutBanner from '../components/AboutBanner'
import Team from '../components/Team'
import Blog from '../components/Blog'

const AboutPage = () => {

    const onRenderCallback = (
        id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions // the Set of interactions belonging to this update
      ) => {
        console.log({
          id,
          phase,
          actualDuration,
          baseDuration,
          startTime,
          commitTime,
          interactions
        });
      };
  return (
    <Profiler id="app" onRender={onRenderCallback}>
      <div>
        <CommonBanner title="About Page" subTitle="Home | About" />
        <AboutBanner />
        <Team />
        <Blog/>
      </div>
    </Profiler>
  )
}

export default AboutPage