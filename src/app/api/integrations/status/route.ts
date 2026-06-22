import { NextResponse } from 'next/server';

import { getTenantId } from '@/server/utils/tenant';

import { isConnected } from '@/server/utils/integration';

export async function GET() {
  try {
    const tenantId = await getTenantId();

    if (!tenantId) {
      return NextResponse.json({
        gmail: false,
        googlecalendar: false,
      });
    }

    const [gmail, googlecalendar] = await Promise.all([
      isConnected(
        tenantId,

        'gmail'
      ),

      isConnected(
        tenantId,
        'googlecalendar'
      ),
    ]);

    return NextResponse.json({
      gmail,
      googlecalendar,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        gmail: false,

        googlecalendar: false,
      },

      {
        status: 500,
      }
    );
  }
}
