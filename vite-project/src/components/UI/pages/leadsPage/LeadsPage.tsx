import React from 'react';
import { APIService } from '../../../../redux/services/APIService';
import LeadsTable from '../../lists/LeadsTable';
import SpinnerLoader from '../../loaders/SpinnerLoader';
import { ILead } from '../../../../ts/interfaces/ILead';

const LeadsPage: React.FC = () => {
    const [contentLimit, setContentLimit] = React.useState<number>(3);
    const [leads, setLeads] = React.useState<ILead[]>([]);

    const { data, isLoading, isSuccess } = APIService.useGetLimitedLeadsQuery(contentLimit);

    React.useEffect(() => {
        if (isSuccess && data) {
            setLeads(prevLeads => {
                const existingLeadIds = new Set(prevLeads.map(lead => lead.id));
                const newLeads = data.filter(lead => !existingLeadIds.has(lead.id));

                return [...prevLeads, ...newLeads];
            });
        }
    }, [data, isSuccess]);

    React.useEffect(() => {{
        const intervalId = setInterval(() => {
            setContentLimit(prevLimit => prevLimit + 3);
        }, 1000)
    
        return () => clearInterval(intervalId)
        }
    }, []);

    return (
        <>
            {isLoading
                ? <SpinnerLoader />
                : <LeadsTable leads={leads} />}
        </>
    );
};

export default LeadsPage;
