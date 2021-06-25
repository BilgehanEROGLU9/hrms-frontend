import React from 'react'
import CandidateList from '../components/CandidateList'
import EmployerList from '../components/EmployerList'
import { Grid } from 'semantic-ui-react'
import Navi from "./Navi"



export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <CandidateList />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <EmployerList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    )
}
