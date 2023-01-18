import React from 'react';
import { Link } from 'react-router-dom';
import person3 from '../../assets/imgs/person3.png';
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { useUserContext } from '../../contexts/UserProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import { useUserCalledContext } from '../../contexts/CalledUserProvider';
const AllChats = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { userInfo } = useUserContext();
  const { dispatch } = useUserCalledContext();
  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  };
  if (user) {
    console.log(user);
  }
  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      userInfo.uid > user.uid
        ? userInfo.uid + user.uid
        : user.uid + userInfo.uid;
    try {
      const res = await getDoc(doc(db, 'chats', combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, 'userChats', userInfo.uid), {
          [combinedId + '.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
          },
          [combinedId + '.date']: serverTimestamp(),
        });

        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedId + '.userInfo']: {
            uid: userInfo.uid,
            displayName: userInfo.displayName,
          },
          [combinedId + '.date']: serverTimestamp(),
        });
      } else {
        handleSelectSeller(user);
      }
    } catch (err) {}

    setUser(null);
    setUsername('');
  };
  // Rended All Chats
  const [chats, setChats] = useState([]);
  // const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', userInfo.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    userInfo.uid && getChats();
  }, [userInfo.uid]);

  const handleSelectSeller = (u) => {
    dispatch({ type: 'CHANGE_USER', payload: u });
  };
  // Rended All Chats
  return (
    <div className='all-chats bg-primary rounded py-4 h-100'>
      <div
        className='btn-group mx-2 d-flex flex-column flex-sm-row gap-2 justify-content-center'
        role='group'
      >
        <button
          type='button'
          className='btn btn-secondary mx-3 text-white fs-5 fw-bold'
        >
          الكل
        </button>
        <button
          type='button'
          className='btn btn-light mx-3 text-primary fs-5 fw-bold'
        >
          مقروئة
        </button>
        <button
          type='button'
          className='btn btn-light mx-3 text-primary fs-5 fw-bold'
        >
          غير مقروئة
        </button>
      </div>
      <div class='mb-3 mt-3'>
        <input
          type='text'
          class='form-control'
          id='exampleFormControlInput1'
          placeholder='ابحث عن المسخدم'
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        //
        <div className='userChat bg-light pointer' onClick={handleSelect}>
          <div className='userChatInfo'>
            <span className='text-secondary fw-bold fs-5'>
              {user.displayName}
            </span>
          </div>
        </div>
      )}
      <div className='border-bottom w-75 mx-auto mt-4'></div>
      {/* chats */}
      <div className='chats mt-3'>
        {Object.entries(chats)
          ?.sort((a, b) => b[1].date - a[1].date)
          .map((chat) => {
            return (
              <Link
                className='box text-decoration-none bg-light rounded mx-1 text-primary d-flex justify-content-between flex-column flex-sm-row py-3 mt-3'
                to={`/chat/user/${chat[1].userInfo.uid}`}
                onClick={() => handleSelectSeller(chat[1].userInfo)}
              >
                <div className='d-flex align-items-center'>
                  {/* <img
                    src={person3}
                    alt='person'
                    className='avatar rounded-circle mx-2'
                  /> */}
                  <div className='mx-3'>
                    <h4>{chat[1].userInfo.displayName}</h4>
                    <span className='fs-5'>{chat[1].lastMessage?.text}</span>
                  </div>
                </div>
                {/* <div className='align-self-start'>
               <h5 className='fw-light text-primary '>
                 <span className='mx-1'>5:00</span>
                 <span>pm</span>
               </h5>
               <div className='bg-primary text-white rounded-circle  w-50 mx-auto h-50 d-flex justify-content-center align-items-center'>
                 <span>1</span>
               </div>
             </div> */}
              </Link>
            );
          })}
        {/* <Link
          className='box text-decoration-none bg-light rounded mx-1 text-primary d-flex justify-content-between flex-column flex-sm-row py-3 mt-3'
          to='/chat/user/as'
        >
          <div className='d-flex align-items-center'>
            <img
              src={person3}
              alt='person'
              className='avatar rounded-circle mx-2'
            />
            <div className='mx-3'>
              <h4>ذياد فؤاد</h4>
              <span className='fs-5'>السلام عليكم</span>
            </div>
          </div>
          <div className='align-self-start'>
            <h5 className='fw-light text-primary '>
              <span className='mx-1'>5:00</span>
              <span>pm</span>
            </h5>
            <div className='bg-primary text-white rounded-circle  w-50 mx-auto h-50 d-flex justify-content-center align-items-center'>
              <span>1</span>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default AllChats;
