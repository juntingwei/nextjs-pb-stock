'use client'

import React from 'react';
import PocketBase from 'pocketbase'
const pb = new PocketBase('http://127.0.0.1:8090');

import { getMyListings } from '@/pages/api/index'

export default function MyListings() {

  const [userId, setUserId] = React.useState("")

    React.useEffect(() => {
        if (pb.authStore.isValid) {
          setUserId(`${pb.authStore.model!.id}`)
        }
    },[pb.authStore.isValid])


  interface Listing {
    units: string;
    trade_charting_term: string;
    pharmacode: string;
    price: number;
    updated: string;
  }
    
  const [myListings, setMyListings] = React.useState<Listing[]>([]);


  React.useEffect(() => {
    async function getListings() {
      const res = await getMyListings(userId)
      const listings = res.map((item) => {
        return {
          units: item.units,
          trade_charting_term: item.trade_charting_term,
          pharmacode: item.pharmacode,
          price: item.price,
          updated: item.updated,
        };
      });
      setMyListings(listings);
      
        console.log(JSON.stringify(res))
    }
    getListings()
  }, [userId])
  

  const myListingsComponent = myListings.map((listing: Listing, index: number) => (
    <tr key={index} className="hover:bg-gray-100">
      <td className="border px-4 py-2">{listing.units}</td>
      <td className="border px-4 py-2">{listing.trade_charting_term}</td>
      <td className="border px-4 py-2">{listing.pharmacode}</td>
      <td className="border px-4 py-2">{listing.price}</td>
      <td className="border px-4 py-2">{listing.updated}</td>
    </tr>
  ))
  
   
    return (
        <div className="flex justify-center">
        <table className="table-auto">
            <thead>
            <tr className="bg-gray-200">
                <th className="border px-4 py-2">Units</th>
                <th className="border px-4 py-2">Trade Charting Term</th>
                <th className="border px-4 py-2">Pharmacode</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Updated</th>
            </tr>
            </thead>
            <tbody>
              {myListingsComponent}
            </tbody>
        </table>
        </div>
    );
}
