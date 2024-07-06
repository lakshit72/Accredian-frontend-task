import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NavBar = () => {
    return(
        <div className="h-[8.5vh] flex justify-center items-center">
            <div className="h-5/6 w-4/5 flex flex-row items-center justify-between">
                <div className="h-full w-[30%] flex items-center flex-row gap-8 text-lg">
                    <img src="https://s3-alpha-sig.figma.com/img/0815/78d9/872c740534629bce867325cd8ecbc7df?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AkCDnOkRxgDJVPEAtWCP-AhRGmxrTfnfZJmBaycqw9AZzARvvxQJrJ24fglgA39dz2hhQ-X9KBn9mMfX5P~2AkmQcxD4auXGrpS1ce7jdZYHKDx0Lq6ai0Rs7tDk2aL9wbWCigQ02zXeNzskOUEHo1XM6WkrJWlmkcQIhUz2VWmLcAWACmkhmwQxwKdz8GBLoNsvb8s7ZB-Yb5ZR4bIYvU1e94ru3qHuBjvjVePAavj5mYcxXnrrpYLRnOfngSRFNnbEC-NQK4jhD4bVQY7pM2c39nEeSacoLw8ryD~iLWedPRpkj2ZwzeAuIGhk8TuBGavvsGFBqmmH5ukaG6qeuA" className="h-3/5 cursor-pointer" alt='logo'></img>
                    <button type="button" className="h-3/5 bg-[#1A73E8] capitalize text-white w-1/3 text-[0.9em] flex flex-row items-center justify-center gap-x-3 rounded-md">
                        Courses <ExpandMoreIcon />
                    </button>
                </div>
                <div className="h-full w-2/3 flex flex-row gap-10 items-center justify-end">
                    <p>Refer & Earn</p>
                    <p>Resources</p>
                    <p>About Us</p>
                    <button className='h-3/5 bg-[#94A3B8]/20 capitalize w-[10%] text-[0.9em] flex flex-row items-center justify-center rounded-md'>Login</button>
                    <button className='h-3/5 bg-[#1A73E8] capitalize text-white w-1/6 text-[0.9em] flex flex-row items-center justify-center rounded-md'>Try for free</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;