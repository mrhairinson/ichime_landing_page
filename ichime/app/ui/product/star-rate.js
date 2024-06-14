"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Rate({ rate }) {
  const [lsRate, setLsRate] = useState([]);
  useEffect(() => {
    let count = Math.floor(rate % 5);
    switch (count) {
      case 0:
        setLsRate([0, 0, 0, 0, 0]);
        break;
      case 1:
        setLsRate([1, 0, 0, 0, 0]);
        break;
      case 2:
        setLsRate([1, 1, 0, 0, 0]);
        break;
      case 3:
        setLsRate([1, 1, 1, 0, 0]);
        break;
      case 4:
        setLsRate([1, 1, 1, 1, 0]);
        break;
      case 5:
        setLsRate([1, 1, 1, 1, 1]);
        break;
      default:
        setLsRate([0, 0, 0, 0, 0]);
        break;
    }
  }, []);
  return (
    <div className="flex gap-1">
      {lsRate.map((item) =>
        item === 1 ? (
          <div>
            <Image
              src="/images/icons/fullStar.png"
              alt="star"
              height={16}
              width={16}
            />
          </div>
        ) : (
          <div>
            <Image
              src="/images/icons/noStar.png"
              alt="no star"
              height={16}
              width={16}
            />
          </div>
        )
      )}
    </div>
  );
}
