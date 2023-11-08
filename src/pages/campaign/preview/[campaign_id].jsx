import PreviewLayout from '@/pages/campaign/preview/layout';
import { useRouter } from 'next/router';

export default function PreviewCampaign() {
    const router = useRouter();

    return (
        <PreviewLayout>
            <p>Pages preview {router.query.campaign_id}</p>
        </PreviewLayout>
    )
}
