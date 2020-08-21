import React from 'react'
import { useParams, Link, useRouteMatch, Route, Switch } from 'react-router-dom';
import InfoPerson from "../persons/section/InfoPerson";
import Credits from '../persons/section/Credits';




const Person = ({ media }) => {
    const { id } = useParams();
    const { path, url } = useRouteMatch();
    /*    const [data] = useDetail("person", id, "combined_credits");
       const [infoPerson] = useDetail("person", id,); */
    return (
        <div>
            <div>
                <Link to={`${url}/info`}>INFORMACIÓN</Link>
                <Link to={`${url}/credits`}>CREDITOS</Link>
            </div>
            <Switch>
                <Route path={`${path}/info`}><InfoPerson media={media}
                    id={id}></InfoPerson></Route>
                <Route path={`${path}/credits`}><Credits></Credits></Route>
            </Switch>


        </div>





    )



}

export default Person
