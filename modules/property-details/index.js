/* eslint-disable max-statements */
import React, { useEffect, useState } from 'react';
import { Button } from '../../components/button';
import EstimateSection from '../../components/estimate-section';
import MortgageSection from '../../components/mortgage-section';
import PropertyDetailSection from '../../components/property-detail-section';
import ValuationSection from '../../components/valuation-section';
import { AccountContext } from '../../context';
import { Inset } from './style';

const onClickHandler = () => alert('You have navigated to the edit account page');

const Detail = () => {
  const [account, setAccount] = useState();

  useEffect(() => {
    const fetchAccount = async () => {
      const response = await fetch('/api/account');
      const accountData = await response.json();
      setAccount(accountData);
    };
    fetchAccount();
  }, []);

  return (
    <Inset>
      {!account && <p>Please wait ...</p>}
      {account && (
        <>
          <AccountContext.Provider value={account}>
            <EstimateSection />
            <PropertyDetailSection />
            <ValuationSection />
            <MortgageSection />
          </AccountContext.Provider>
          <Button onClick={onClickHandler}>Edit account</Button>
        </>
      )}
    </Inset>
  );
};

export default Detail;
