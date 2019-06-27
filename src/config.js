const SBD = 'WKD'
const STEEM = 'WEKU'
const SP = 'WP'
const VESTS = 'VESTS'
const RPC_NODE = { url: 'https://dev.weku.io', useAppbaseApi:true  }
// const RPC_NODE = { url: 'https://standby.weku.io:8190', useAppbaseApi:true  }
const HARDFORK = 20

const STEEM_100_PERCENT = 10000
const STEEM_VOTE_REGENERATION_SECONDS = 5*24*60*60
const STEEM_INFLATION_RATE_START_PERCENT = 978
const STEEM_INFLATION_NARROWING_PERIOD = 250000
const STEEM_INFLATION_RATE_STOP_PERCENT = 95
const STEEM_BLOCKS_PER_YEAR = 365*24*60*60/3
const STEEM_BLOCKS_PER_DAY = 24*60*60/3
const STEEM_SBD_START_PERCENT = 900
const STEEM_SBD_STOP_PERCENT = 1000

//witnesses map
const MAP = {
  TOP_WITNESSES: 20,
  INI_POS : [30, 0], //latitude, longitude
  INI_ZOOM : 1,
}

export default {
  SBD: SBD,
  STEEM: STEEM,
  SP: SP,
  VESTS: VESTS,
  RPC_NODE: RPC_NODE,
  HARDFORK: HARDFORK,
  
  STEEM_100_PERCENT: STEEM_100_PERCENT,
  STEEM_VOTE_REGENERATION_SECONDS: STEEM_VOTE_REGENERATION_SECONDS,
  STEEM_INFLATION_RATE_START_PERCENT: STEEM_INFLATION_RATE_START_PERCENT,
  STEEM_INFLATION_NARROWING_PERIOD: STEEM_INFLATION_NARROWING_PERIOD,
  STEEM_INFLATION_RATE_STOP_PERCENT: STEEM_INFLATION_RATE_STOP_PERCENT,
  STEEM_BLOCKS_PER_YEAR: STEEM_BLOCKS_PER_YEAR,
  STEEM_BLOCKS_PER_DAY: STEEM_BLOCKS_PER_DAY,
  STEEM_SBD_START_PERCENT: STEEM_SBD_START_PERCENT,
  STEEM_SBD_STOP_PERCENT: STEEM_SBD_STOP_PERCENT,  
  
  MAP: MAP,
}