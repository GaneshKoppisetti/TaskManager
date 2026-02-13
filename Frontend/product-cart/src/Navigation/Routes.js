import {Route, Routes} from 'react-router-dom'
import {lazy, Suspense} from 'react'
import RouteLoader from '../Shared/RouteLoader';
const TodoTasks = lazy(()=> import ('../Tasks/todotasks'));
const PendingTasks = lazy(()=> import ('../Tasks/pendingtasks'));
const CompletedTasks = lazy(()=> import ('../Tasks/completedtasks'));
const PageNotFound = lazy(()=> import ('../Shared/pagenotfound'));
const Dashboard =  lazy(() =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(import("../Dashboard/dashboard"));
    }, 5000)
})
);

const RoutesItems = () => {
    return (
        <Suspense fallback={<RouteLoader/>}>
            <Routes>
                <Route path='/' element={<Dashboard/>}></Route>
                <Route path='/todotasks' element={<TodoTasks/>}></Route>
                <Route path='/pendingtasks' element={<PendingTasks/>}></Route>
                <Route path='/completedtasks' element={<CompletedTasks/>}></Route>
                <Route path='*' element={<PageNotFound/>}></Route>
            </Routes>
        </Suspense>
    )
}
export default RoutesItems;