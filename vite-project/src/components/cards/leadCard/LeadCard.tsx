import React from 'react';
import '../../../style/css/cards/leadCard.css';
import { ILead } from '../../../ts/interfaces/ILead';
import { APIService } from '../../../redux/services/APIService';

const LeadCard: React.FC<{ lead: ILead }> = ({ lead }) => {
    const [isLeadRevealed, setLeadRevealed] = React.useState<boolean>(false);
    
    const { data: revealedLead, isLoading, isSuccess } = APIService.useGetRevealdLeadByIdQuery(lead.id, { skip: !isLeadRevealed });

    const formattedDate = React.useMemo(() => {
        if (!revealedLead?.closest_task_at) return 'Не назначено';

        const date = new Date(revealedLead.closest_task_at * 1000);
        return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
    }, [revealedLead?.closest_task_at]);

    const taskCircleFill = React.useMemo(() => {
        if (!revealedLead?.closest_task_at) return 'red';

        const taskDate = new Date().getDate() - new Date(revealedLead.closest_task_at * 1000).getDate();

        if (taskDate > 0) return 'red';
        if (taskDate < 0) return 'yellow';
        return 'green';
    }, [revealedLead?.closest_task_at]);

    return (
        <tr className='leadCard' aria-disabled={isLoading}>
            <td>{lead.id}</td>
            <td>{lead.price}</td>
            <td>
                {lead.name}
                <button disabled={isLoading} type='button' onClick={() => setLeadRevealed(!isLeadRevealed)}>
                    {isLeadRevealed ? 'Скрыть' : 'Подробнее'}
                </button>
            </td>
            {(isSuccess && isLeadRevealed) && (
                <>
                    <td>{formattedDate}</td>
                    <td>
                        <svg height="100" width="100">
                            <circle cx="50" cy="50" r="10" fill={taskCircleFill} />
                        </svg>
                    </td>
                </>
            )}
        </tr>
    );
};

export default LeadCard;
