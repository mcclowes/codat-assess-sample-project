import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { normalizeAssessData } from '../../utils/normalizeAssessData';

const CHART_COLORS = [
  "#8884d8",
  "#82ca9d"
]

const Company = ({companyData, assessData, rawData}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codat X Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js</a> X <a href="https://www.codat.io">Codat!</a>
        </h1>

        <p>
          This page uses 
          <a href="https://nextjs.org/docs/basic-features/pages#server-side-rendering">Server-side Rendering</a>, 
          and is rendered server side every time the page is requested.
          This ensures your Codat API key is not exposed to the user.
        </p>

        <h2>{companyData.name}</h2>
        <p><i>{companyData.id}</i></p>
        <p><b>Connections:</b> {companyData.platform}</p>
        <p><b>Last pull:</b> {companyData.lastSync}</p>
        <p><b>Created:</b> {companyData.created}</p>

        <br/>
        {
          assessData
          ? <LineChart
              width={500}
              height={300}
              data={assessData.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {
                assessData.keys.map((key, i) => <Line key={i} type="monotone" dataKey={key} stroke={CHART_COLORS[i]} activeDot={{ r: 8 }} /> )
              }
            </LineChart>
          : <div>No assess data</div>
        }
        <br/>

        <div className={styles.grid}>
          <a className={styles.card} href={`https://app.codat.io/companies/${companyData.id}`} target="_blank" rel="noreferrer">
            Explore {companyData.name} in the Portal →
          </a>

          <Link href="/" className={styles.card}>
            <p className={styles.card}>← Back to Home</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const companyId = context.params.id[0];

  // Encode your API key
  const encodedKey = Buffer.from(process.env.CODAT_API_KEY).toString(
    "base64"
  );

  // Add auth to the headers
  const headers = {
    method: "GET",
    headers: {
      authorization: "Basic " + encodedKey,
      "Access-Control-Allow-Origin": "*",
    },
  }

  // Fetch company data from Codat API
  const resCompany = await fetch(`https://api.codat.io/companies/${companyId}`, headers)
  const dataCompany = await resCompany.json()

  try {  
    // Fetch assess data from Codat API
    const resConnections = await fetch(`https://api.codat.io/companies/${companyId}/connections?page=1&pageSize=100&query=status%3DLinked`, headers)
    const dataConnections = await resConnections.json()

    //Catch errors
    if (!resConnections.ok) {
      throw new Error(`Response failed`)
    }

    const firstAccountingConnection = dataConnections.results.filter(connection => connection.sourceType==="Accounting")[0]
    const resAssess = await fetch(`https://api.codat.io/data/companies/${companyId}/connections/${firstAccountingConnection.id}/assess/enhancedProfitAndLoss?reportDate=2022-05-31&periodLength=1&numberOfPeriods=12&includeDisplayNames=false`, headers)
    const dataAssess = await resAssess.json()

    const dataAssessNormalized = normalizeAssessData(dataAssess);

    //Catch errors
    if (!resAssess.ok) {
      throw new Error(`Response failed`)
    }

    // Pass data to the page via props
    return { props: { 
      companyData: dataCompany,
      assessData: dataAssessNormalized,
    } }
  } catch (error) {
    return { props: {
      companyData: dataCompany,
    } }
  }
}

export default Company;