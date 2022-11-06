import Config from '@views/Config/index'
import Live_Config from '@views/Live_Config/index'
import Mobile from '@views/Mobile/index'
import Panel from '@views/Panel/index'
import Video_Component from '@views/Video_Component/index'
import Video_Overlay from '@views/Video_Overlay/index'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <Video_Overlay />,
  },
  {
    path: '/config',
    element: <Config />,
  },
  {
    path: '/live_config',
    element: <Live_Config />,
  },
  {
    path: '/panel',
    element: <Panel />,
  },
  {
    path: '/mobile',
    element: <Mobile />,
  },
  {
    path: '/video_overlay',
    element: <Video_Overlay />,
  },
  {
    path: '/video_component',
    element: <Video_Component />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
