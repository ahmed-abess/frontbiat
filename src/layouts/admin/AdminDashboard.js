import * as React from 'react';
import reportsLineChartData from "../dashboard/data/reportsLineChartData";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Grid from "@mui/material/Grid";
import MDBox from "../../components/MDBox";
import ComplexStatisticsCard from "../../examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ReportsLineChart from "../../examples/Charts/LineCharts/ReportsLineChart";

function DashboardAdmin() {
    const { sales, tasks } = reportsLineChartData;

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox py={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={4}>
                        <MDBox mb={1.5}>
                            <ComplexStatisticsCard
                                color="dark"
                                icon="weekend"
                                title="Demmande Credit"
                                count={281}
                                percentage={{
                                    color: "success",
                                    amount: "+55%",
                                }}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <MDBox mb={1.5}>
                            <ComplexStatisticsCard
                                icon="leaderboard"
                                title="Nombre des Comptes"
                                count="842"
                                percentage={{
                                    color: "success",
                                    amount: "+10%",

                                }}
                            />
                        </MDBox>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <MDBox mb={1.5}>
                            <ComplexStatisticsCard
                                color="primary"
                                icon="person_add"
                                title="Nouveaux comptes"
                                count="+91"
                                percentage={{
                                    color: "success",
                                    amount: "+30%",
                                    label: "Just updated",
                                }}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={12} sx={{marginTop:10}}>
                        <MDBox mb={3}>
                            <ReportsLineChart
                                color="dark"
                                title="Nouveaux Comptes"
                                description="Compte client ajoutée"
                                chart={tasks}
                                sx={{height:300}}
                            />
                        </MDBox>
                    </Grid>
                </Grid>
            </MDBox>

        </DashboardLayout>
    )
}

export default DashboardAdmin