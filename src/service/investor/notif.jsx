import callAPI from '@/config/api';

import {ReportAdminTypes } from '@/service/investor/data-types';

const ROOT_API = process.env.NEXT_PUBLIC_SERVICE_INVESTOR;
const API_VERSION = 'api/v1';

const buildUrl = (endpoint) => `${ROOT_API}/${API_VERSION}/${endpoint}`;

export async function setReportAdminAPI(data = ReportAdminTypes ,token) {
    const url = buildUrl('report_to_admin');
    
    return callAPI({
        url,
        method: 'POST',
        token: token,
        data,
    });
}