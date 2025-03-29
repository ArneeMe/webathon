import React from 'react';
import { Layout } from '@/app/components/Layout/Layout';
import LandingPageContent from '@/app/pages/LandingPageContent';

import { F1Header } from '@/app/components/Header/F1Header';
import { Footer } from '@/app/components/Footer/';
import ThreePhaseLanding from '@/app/pages/LandingPageContent';


export default function HomePage() {
    return (
        <Layout
            headerProps={{
                component: F1Header,
            }}
            footerProps={{
                showSocialLinks: true
            }}
        >
            <ThreePhaseLanding />
        </Layout>
    );
}
