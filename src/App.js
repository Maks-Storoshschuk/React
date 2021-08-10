// Взяти масив usersList.
//     Створити компонент,котрий характеризує юзера.
//     Створити компонент,котрий характеризує підоб'єкт юзера address. Використати в компоненті юзера.
// Створити компонент,котрий характеризує підоб'єкт адреси юзера geo. Використати в компоненті адреси.
// Вкладеність компонентів : App->Users->User->Address->Geo
// Вивести всі об'єкти з масиву
import './App.css'
import './components/lesson1_classwork/userlist';
import {UserList} from "./components/lesson1_classwork/userlist";
import {Address} from "./components/lesson1_classwork/Address";
import {Geo} from "./components/lesson1_classwork/Geo";
function App() {
    let cls = 'Users';
    return (
        <div className={cls}>
            <div className='User'>

                <UserList
                    id = {'1'}
                    name = { 'Leanne Graham'}
                    username = {'Bret'}
                    email = {'Sincere@april.biz'}
                    phone = {'1-770-736-8031'}
                    website = {'hildegard.org'}
                />
                <Address
                    street = {'Kulas Light'}
                    suite = {'Apt. 556'}
                    city = {'Gwenborough'}
                    zipcode = {'92998-3874'}
                />
                <Geo
                    lat = {'-37.3159'}
                    lng = {'81.1496'}
                />
            </div>
            <div className='User'>
                <UserList
                    id = {'2'}
                    name = {'Ervin Howell'}
                    username = {'Antonette'}
                    email = {'Shanna@melissa.tv'}
                    phone = {'010-692-6593 x09125'}
                    website = {'anastasia.net'}
                />
                <Address
                    street = {'Victor Plains'}
                    suite = {'Suite 879'}
                    city = {'Wisokyburgh'}
                    zipcode = {'90566-7771'}
                />
                <Geo
                    lat = {'-43.9509'}
                    lng = {'-34.4618'}
                />
            </div>
            <div className='User'>
                <UserList
                    id = {'3'}
                    name = {'Clementine Bauch'}
                    username = {'Samantha'}
                    email = {'Nathan@yesenia.net'}
                    phone = {'1-463-123-4447'}
                    website = {'ramiro.info'}
                />
                <Address
                    street = {'Douglas Extension'}
                    suite = {'Suite 847'}
                    city = {'McKenziehaven'}
                    zipcode = {'59590-4157'}
                />
                <Geo
                    lat = {'-68.6102'}
                    lng = {'-47.0653'}
                />
            </div>
            <div className='User'>
                <UserList
                    id = {4}
                    name = {'Patricia Lebsack'}
                    username = {'Karianne'}
                    email = {'Julianne.OConner@kory.org'}
                    phone = {'493-170-9623 x156'}
                    website = {'kale.biz'}
                />
                <Address
                    street = {'Hoeger Mall'}
                    suite = {'Apt. 692'}
                    city = {'South Elvis'}
                    zipcode = {'53919-4257'}
                />
                <Geo
                    lat = {'29.4572'}
                    lng = {'-164.2990'}
                />
            </div>
            <div className='User'>
                <UserList
                    id = {'5'}
                    name = {'Chelsey Dietrich'}
                    username = {'Kamren'}
                    email = {'Lucio_Hettinger@annie.ca'}
                    phone = {'(254)954-1289'}
                    website = {'demarco.info'}
                />
                <Address
                    street = {'Skiles Walks'}
                    suite = {'Suite 351'}
                    city = {'Roscoeview'}
                    zipcode = {'33263'}
                />
                <Geo
                    lat = {'-31.8129'}
                    lng = {'62.5342'}
                />
            </div>
            <div className='User'>
                <UserList
                    id = {'6'}
                    name = {'Mrs. Dennis Schulist'}
                    username = {'Leopoldo_Corkery'}
                    email = {'Karley_Dach@jasper.info'}
                    phone = {'1-477-935-8478 x6430'}
                    website = {'ola.org'}
                />
                <Address
                    street = {'Norberto Crossing'}
                    suite = {'Apt. 950'}
                    city = {'South Christy'}
                    zipcode = {'23505-1337'}
                />
                <Geo
                    lat = {'-71.4197'}
                    lng = {'71.7478'}
                />
            </div>
            <div className='User'>
                <UserList
                    id = {'7'}
                    name = {'Kurtis Weissnat'}
                    username = {'Elwyn.Skiles'}
                    email = {'Telly.Hoeger@billy.biz'}
                    phone = {'210.067.6132'}
                    website = {'elvis.io'}
                />
                <Address
                    street = {'Rex Trail'}
                    suite = {'Suite 280'}
                    city = {'Howemouth'}
                    zipcode = {'58804-1099'}
                />
                <Geo
                    lat = {'24.8918'}
                    lng = {'21.8984'}
                />
            </div>
            <div className='User'>
                <UserList
                    id = {'8'}
                    name = {'Nicholas Runolfsdottir V'}
                    username = {'Maxime_Nienow'}
                    email = {'Sherwood@rosamond.me'}
                    phone = {'586.493.6943 x140'}
                    website = {'jacynthe.com'}
                />
                <Address
                    street = {'Ellsworth Summit'}
                    suite = {'Suite 729'}
                    city = {'Aliyaview'}
                    zipcode = {'45169'}
                />
                <Geo
                    lat = {'-14.3990'}
                    lng = {'-120.7677'}
                />
            </div>
            <div className='User'>
                <UserList
                    id = {'9'}
                    name = {'Glenna Reichert'}
                    username = {'Delphine'}
                    email = {'Chaim_McDermott@dana.io'}
                    phone = {'(775)976-6794 x41206'}
                    website = {'conrad.com'}
                />
                <Address
                    street = {'Dayna Park'}
                    suite = {'Suite 449'}
                    city = {'Bartholomebury'}
                    zipcode = {'76495-3109'}
                />
                <Geo
                    lat = {'24.6463'}
                    lng = {'-168.8889'}
                />
            </div>
            <div className='User'>
                <UserList
                    id = {'10'}
                    name = {'Clementina DuBuque'}
                    username = {'Moriah.Stanton'}
                    email = {'Rey.Padberg@karina.biz'}
                    phone = {'024-648-3804'}
                    website = {'ambrose.net'}
                />
                <Address
                    street = {'Kattie Turnpike'}
                    suite = {'Suite 198'}
                    city = {'Lebsackbury'}
                    zipcode = {'31428-2261'}
                />
                <Geo
                    lat = {'-38.2386'}
                    lng = {'57.2232'}
                />
            </div>
        </div>

    )

}
export default App;


