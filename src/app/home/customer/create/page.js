'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './createCustomer.module.css';

import { category, api, product } from "@/proto/index";
import { protoGet, protoPost, protoPut } from '@/utils/protoAPI';






export default function CreateCustomer({ editItem = null }) {


  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>{editItem ? 'Edit' : 'Create'} <em>Customer</em></h1>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.btnSecondary} onClick={() => router.push('/home/stock')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Back
          </button>
          {<button className={styles.btnSecondary} onClick={() => {}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Cancel
          </button>}
          <button className={styles.btnPrimary} >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {'Save Stock'}
          </button>
        </div>
      </div>  

      <div className={styles.formGrid}>
        <div className={styles.card}></div>
      </div>



    </div>
  );
}
