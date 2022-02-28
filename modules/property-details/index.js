/* eslint-disable max-statements */
import React, { useEffect, useState, createContext } from 'react';
import { Button } from '../../components/button';
import EstimateSection from '../../components/estimate-section';
import MortgageSection from '../../components/mortgage-section';
import PropertyDetailSection from '../../components/property-detail-section';
import { AccountContext } from '../../context';
import { Inset } from './style';

const Detail = ({}) => {
  const [account, setAccount] = useState();

  useEffect(() => {
    const fetchAccount = async () => {
      const response = await fetch('/api/account');
      const accountData = await response.json();
      console.log(accountData);
      setAccount(accountData);
    };
    fetchAccount();
  }, []);

  return (
    <Inset>
      {account && (
        <AccountContext.Provider value={account}>
          <EstimateSection />
          <PropertyDetailSection />
          <MortgageSection />
        </AccountContext.Provider>
      )}
      <Button
        // This is a dummy action
        onClick={() => alert('You have navigated to the edit account page')}>
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;
