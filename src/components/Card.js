function Card({hog,show,renderDetail}){
    return <div key={hog.name} className="ui eight wide column">
    <div class="ui link cards">
      <div class="card">
        <div class="image">
          <img src={hog.image}/>
        </div>
      <div class="content">
    <div class="header">{hog.name}</div>
  </div>
      {show ? renderDetail(hog) : ""}
  </div>
</div>
</div>
}
export default Card;