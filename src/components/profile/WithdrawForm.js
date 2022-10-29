import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import * as transactionService from "../../api/transactionApi";
import Loading from "../../context/Loading";

function WithdrawForm() {
  const { user } = useAuth();
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleCreateTransaction = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const formData = new FormData();
      formData.append("task", "WITHDRAW");
      amount && formData.append("amount", amount);

      await transactionService.createTransaction(formData);

      window.location.reload();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex flex-col justify-between items-center min-w-[725px] min-h-[425px] gap-[18px]">
        <div className="flex flex-col justify-between items-center h-[400px]">
          <Loading />
        </div>
      </div>
    );

  return (
    <div className="flex flex-col justify-between items-center min-w-[725px] min-h-[425px] gap-[18px]">
      <div className="flex flex-col justify-between items-center h-[400px]">
        <div className="flex flex-row justify-center items-center w-[250px] h-[75px] bg-[#9AC0B5] rounded-[30px] text-white text-[24px] font-medium">
          Wallet:
          {user.wallet.toLocaleString("en-US", {
            style: "currency",
            currency: "THB",
          })}
        </div>
        <div className="flex flex-row justify-center items-center gap-[15px]">
          <div className="text-[#224957] text-[20px] font-medium">Amout:</div>
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            value={amount}
            className="flex flex-row justify-center items-center text-center text-[#9AC0B5] text-[24px] w-[150px] h-[50px] border-2 border-[#9AC0B5] rounded-[20px]"
          />
          <div className="text-[#224957] text-[20px] font-medium">THB</div>
        </div>
        <div className="flex flex-row justify-center items-center gap-[20px]">
          <button
            onClick={handleCreateTransaction}
            className="flex justify-center items-center font-medium text-[#224957] w-[150px] h-[40px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
          >
            Submit Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

export default WithdrawForm;
