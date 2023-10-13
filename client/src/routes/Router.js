import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header';
import Main from './BtnSection';
import Section from './Section';
import RecruitList from '../components/RecruitList';
import UserInfo from '../components/UserInfo';
import Recruit from '../components/Recruit';
import RecruitDetail from '../components/RecruitDetail';
import Management from '../components/Management';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import RecruitEdit from '../components/RecruitEdit';



// main Router 실행 전에 인트로 페이지 실행해야 함
function Router() {
    return <>
        
        <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Section />} />
                </Routes>
                <Routes>
                    <Route path='/' element={<Main />}></Route>
                </Routes>
                <Routes>
                    <Route path={`/list/:${'params'}`} element={<RecruitList />}/>
                    <Route path={`/user/info/:${'userId'}`} element={<UserInfo />}/>
                    <Route path='/project' element={<Recruit />}/>
                    <Route path={`/project/detail/:${'id'}`} element={<RecruitEdit />} />
                    <Route path={`/detail/:${'id'}`} element={<RecruitDetail />}/>
                    <Route path='/project/admin' element={<Management />}/>
                    <Route path='/signup' element={<SignUp />}/>
                    <Route path='/signin' element={<SignIn />}/>
                
                </Routes>
        </BrowserRouter>
    </>
}

export default Router;