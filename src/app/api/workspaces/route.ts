import { NextRequest, NextResponse } from 'next/server';
import { getWorkspacesByProfile } from '@/lib/workspaceStorage';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const profileId = searchParams.get('profileId');

        if (!profileId) {
            return NextResponse.json(
                { error: 'Profile ID is required' },
                { status: 400 }
            );
        }

        // Get workspaces for the profile
        const workspaces = await getWorkspacesByProfile(profileId);

        return NextResponse.json({
            workspaces,
            count: workspaces.length
        });
    } catch (error) {
        console.error('Failed to fetch workspaces:', error);
        return NextResponse.json(
            { error: 'Failed to fetch workspaces' },
            { status: 500 }
        );
    }
}
