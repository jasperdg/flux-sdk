import { Order } from "../models/Order";
import { SdkConfig } from "../models/SdkConfig";
import fetchRequest from "../utils/fetchRequest";

export async function getAffiliateEarningsByAccount(sdkConfig: SdkConfig, accountId: string): Promise<any> {
    const response = await fetchRequest(`${sdkConfig.indexNodeUrl}/user/get_affiliate_earnings`, {
        body: JSON.stringify({
            accountId,
        }),
    });

    return response.json();
}

export async function getAllOpenOrdersByAccount(sdkConfig: SdkConfig, accountId: string): Promise<Order[]> {
    const response = await fetchRequest(`${sdkConfig.indexNodeUrl}/user/get_open_orders`, {
        body: JSON.stringify({
            accountId,
        }),
    });

    return response.json();
}

export async function getOrderHistoryByAccount(sdkConfig: SdkConfig, accountId: string): Promise<any> {
    const response = await fetchRequest(`${sdkConfig.indexNodeUrl}/user/get_order_history`, {
        body: JSON.stringify({
            accountId,
        }),
    });

    return response.json();
}
